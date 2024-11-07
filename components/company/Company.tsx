import React from 'react'
import Image from "next/image";

const Company = () => {
  return (
    <section className='px-4 md:px-12'>
      <p className='text-lg font-semibold text-center text-[#818898] pt-10 md:pt-14'>
        Trusted by 2 million+ teams
      </p>
      <div className="flex flex-wrap justify-center gap-6 pt-8 md:pt-12">
        <Image src="/company/Company logo (6).png" alt="medium" width={80} height={80} />
        <Image src="/company/Company logo (7).png" alt="mailchimp" width={80} height={80} />
        <Image src="/company/Company logo (4).png" alt="evernote" width={80} height={80} />
        <Image src="/company/Company logo (5).png" alt="dropbox" width={80} height={80} />
        <Image src="/company/Company logo (8).png" alt="microsoft" width={80} height={80} />
      </div>
    </section>
  )
}

export default Company;
