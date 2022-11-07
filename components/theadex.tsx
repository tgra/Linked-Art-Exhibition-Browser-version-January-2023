import Link from 'next/link'

export default function TheadEx() {

   
  return (
    
    <thead>
    <tr><th><Link href="title_asc">Title</Link></th><th><Link href="start_asc">Start date</Link></th></tr>
    <tr><th><Link href="title_asc">Asc</Link> <Link href="title_dsc">Dsc</Link></th><th><Link href="start_asc">Asc</Link> <Link href="start_dsc">Dsc</Link></th></tr>
  </thead>
  )
}