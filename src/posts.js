import _ from 'lodash'
import all from '../posts/*.md'

export const posts = _.chain(all) // begin a chain
                      .map(transform) // transform the shape of each post
                      .compact()
                      .orderBy('date', 'desc') // sort by date descending
                      .value() // convert chain back to array

// function for reshaping each post
function transform({filename, html, metadata}) {

  if(metadata.isDraft) return null;

  // the permalink is the filename with the '.md' ending removed
  const permalink = filename.replace(/\.md$/, '')

  // convert date string into a proper `Date`
  const date = new Date(metadata.date)
  //const opt = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  const datestr = date.toLocaleDateString("en-US")
  // return the new shape
  return {...metadata, filename, html, permalink, date, datestr}
}

// provide a way to find a post by permalink
export function findPost(permalink) {
  // use lodash to find by field name:
  return _.find(posts, {permalink})
}

export function findPostByTag(tag) {
  var match = _.filter(posts, function (post) {
    if(post.tags && post.tags.indexOf(tag) > -1) return posts;    
  });
  return match;
}