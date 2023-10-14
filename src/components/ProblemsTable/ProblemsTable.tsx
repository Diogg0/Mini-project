import React from 'react';
import { problems } from '@/mockProblems/problems';
import { BsCheckCircle } from 'react-icons/bs';
import Link from 'next/link';

type ProblemsTableProps = {
    
};

const ProblemsTable:React.FC<ProblemsTableProps> = () => {
    
    return (
        <tbody className='text-dark-pink translate-x-[30%] '>
            {problems.map((doc, idx) =>{
                return(
                    <tr className={`${idx % 2 == 1 ? 'bg-hot-pink' : 'bg-pink '}`} key={doc.id}>
                        <th className = 'px-10 py-4 font-medium whitespace-nowrap text-dark-green-s w-5'>
                            <BsCheckCircle fontSize={"18"} width="18"/>
                        </th>
                        <td className='px-10 py-4'>
                            <Link className='hover:text-blue-600 cursor-pointer' href={'problems/${doc.id}'}>
                                {doc.title}
                            </Link>
                        </td>
                        <td className='px-10 py-4'>
                            {doc.subject}
                
                        </td>
                    </tr>
                )

            })
        }
        </tbody>
    )
}
export default ProblemsTable;