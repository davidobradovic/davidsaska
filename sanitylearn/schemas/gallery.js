export default{
    name: 'gallery',
    title: 'Galerija',
    type: 'document',
    fields:[
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Slika',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}