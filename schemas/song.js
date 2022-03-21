export default {
  name: 'song',
  title: 'Song',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'artist',
      type: 'string',
      title: 'Artist'
    },
    {
      name: 'song',
      type: 'file',
      title: 'Song',
      accept: ".mp3"
    },
    {
      name: 'albumCover',
      type: 'image',
      title:'Album Cover'
    }
  ]
}
