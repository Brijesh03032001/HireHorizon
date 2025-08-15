import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const JobsPageOverview = async () => {
  return (
    <div className='p-6'>
        <div className='flex items-end justify-end'>
            <Link href='/admin/create' className='btn btn-primary'>
                <Button><Plus className='mr-2 h-5 w-5' />
                    New Job
                </Button>
            </Link>

            {/* datatable - list of Jobs */}
        </div>
       
    </div>
  )
}

export default JobsPageOverview
