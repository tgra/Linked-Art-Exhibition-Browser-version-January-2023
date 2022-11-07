import Link from 'next/link'

export default function TheadEx() {

   
  return (
    
    <thead>
    <tr>
        <th><Link href="name_dsc">Personal name</Link></th>
        <th><Link href="born_asc">Birth date</Link></th>
        <th><Link href="died_asc">Death date</Link></th>
        <th><Link href="totalex_dsc">Total number exhibitions</Link></th>
        </tr>
    <tr>
        <th><Link href="name_dsc">Dsc</Link></th>
        <th><Link href="born_asc">Asc</Link> <Link href="born_dsc">Dsc</Link></th>
        <th><Link href="died_asc">Asc</Link> <Link href="died_dsc">Dsc</Link></th>
        <th><Link href="totalex_dsc">Dsc</Link></th>
        </tr>


  </thead>
  )
}