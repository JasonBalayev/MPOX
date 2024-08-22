import React, { useEffect, useState } from 'react';
import { getCases } from '../api';

const CaseList = () => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        const fetchCases = async () => {
            try {
                const data = await getCases();
                setCases(data);
            } catch (error) {
                console.error('Error fetching cases:', error);
            }
        };

        fetchCases();
    }, []);

    return (
        <div>
            <h2>Monkeypox Cases</h2>
            <ul>
                {cases.map((caseItem) => (
                    <li key={caseItem.id}>
                        {caseItem.country} - {caseItem.state}: {caseItem.cases} cases on {caseItem.date_reported}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CaseList;
