export default {
    name: 'product',
    title: 'Proizvodi',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Ime',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'image',
            title: 'Slika',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Cijena',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Detalji',
            type: 'string'
        }

    ]
}