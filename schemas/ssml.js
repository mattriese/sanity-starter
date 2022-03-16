export default {
  name: 'ssml',
  type: 'document',
  title: 'SSML',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be short and descriptive',
    },
    {
      name: 'response',
      title: 'Response',
      type: 'speech',
    },
  ],
};
