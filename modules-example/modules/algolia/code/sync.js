const algoliasearch = require('algoliasearch');

// replace with your own values
// var client = algoliasearch('YourApplicationID', 'YourAPIKey');
// var index = client.initIndex('yourIndexName');
// const modelName = 'yourModelName'

const client = algoliasearch('EDLHXWDRS1', 'ff97501c6ff2f2966656e67d43ae4d87');
const index = client.initIndex('your_index_name');
const modelName = 'Post'

module.exports = function (event) {
  
  const mutation = event.data[modelName].mutation
  const node = event.data[modelName].node
  const previousValues = event.data[modelName].previousValues

  switch (mutation) {
    case "CREATED":
    return syncAddedNode(node)
    case "UPDATED":
    return syncUpdatedNode(node)
    case "DELETED":
    return syncDeletedNode(previousValues)
    default:
    console.log(`mutation was '${mutation}'. Unable to sync node.`)
    return Promise.resolve()
  }
}

function syncAddedNode(node) {
  console.log('Adding node')
  return index.addObject(node) 
}

function syncUpdatedNode(node) {
  console.log('Updating node')
  return index.saveObject(node) 
}

function syncDeletedNode(node) {
  console.log('Deleting node')
  return index.deleteObject(node.objectID)
}