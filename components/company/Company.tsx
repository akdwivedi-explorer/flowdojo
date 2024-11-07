import React from 'react'
import Image from "next/image";

const Company = () => {
  return (
    <section className='pl-12 pr-12'>
        <p className='text-lg font-semibold text-center text-[#818898] pt-14'>Trusted by 2 million+ teams</p>
        <div className="flex items-center justify-between pt-12">
            <Image src="/company/Company logo (6).png" alt="medium" width={100} height={100} />
            <Image src="/company/Company logo (7).png" alt="mailchip" width={100} height={100} />
            <Image src="/company/Company logo (4).png" alt="evernote" width={100} height={100} />
            <Image src="/company/Company logo (5).png" alt="dropbox" width={100} height={100} />
            <Image src="/company/Company logo (8).png" alt="microsoft" width={100} height={100} />
        </div>
    </section>
  )
}

export default Company