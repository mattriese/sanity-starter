export default {
  title: 'Background Image',
  name: 'backgroundImage',
  type: 'document',
  fields: [
    {
      name: 'imageFile',
      type: 'image',
      title: 'Image File',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    }
  ]
}
