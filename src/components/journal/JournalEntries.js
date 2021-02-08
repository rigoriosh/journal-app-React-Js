import React from 'react'
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
    const entries = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    return (
        <div className="journal__entries">
            JournalEntries
            {
                entries.map((e, i) => (
                    <JournalEntry key={e}/>
                ))
            }
        </div>
    )
}
