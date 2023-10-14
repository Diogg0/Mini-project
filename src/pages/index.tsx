import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";


export default function Home() {
  return (
    <>

      <main className='bg-white min-h-screen'>
          <Topbar />
          <h1 className="text-3xl text-center text-dark-pink font-medium uppercase mt-20 mb-5 translate-x-[-40%] translate-y-[200%]">Problems</h1>
          <div className='relative overflow-x-auto-mx-auto px-6 py-20 pb-10'>
            <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm: w-full max-w-[1200px] mx-auto">
              <thead className="text-xs text-dark-pink uppercase border-b">
                <tr>
                  <th scope='col' className='px-1 py-1 w-0 font-medium text-lg'>
                    Status
                  </th>
                  <th scope='col' className='px-6 py-3 w-0 font-medium text-lg'>
                    Title
                  </th>
                  <th scope='col' className='px-12 py-6 w-0 font-medium text-lg'>
                    Subject
                  </th>
                  <th scope='col' className='px-18 py-6 w-0 font-medium text-lg'>
                    Credit
                  </th>
                </tr>
              </thead>
            </table>
            <ProblemsTable/>
            

          </div>
      </main>
    </>
  )
}
