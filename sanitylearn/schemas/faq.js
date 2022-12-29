export default{
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields:[
        {
            name: 'quest',
            title: 'Pitanje',
            type: 'string'
        },
        {
            name: 'answ',
            title: 'Odgovor',
            type: 'text',
            rows: 10,
        }
    ]
}