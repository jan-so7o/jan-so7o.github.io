import _ from 'lodash'
import all from '../posts/*.md'

export const posts = _.chain(all) // begin a chain
                      .map(transform) // transform the shape of each post
                      .compact()
                      .orderBy('date', 'desc') // sort by date descending
                      .value() // convert chain back to array

function date2str(x, y) {
  var x = new Date(x);
  var z = {
      M: x.getMonth() + 1,
      d: x.getDate(),
      h: x.getHours(),
      m: x.getMinutes(),
      s: x.getSeconds()
  };
  y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
    return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2);
  });

  return y.replace(/(y+)/g, function(v) {
      return x.getFullYear().toString().slice(-v.length)
  });
}
// function for reshaping each post
function transform({filename, html, metadata}) {

  if(metadata.isDraft) return null;

  // the permalink is the filename with the '.md' ending removed
  const permalink = filename.replace(/\.md$/, '')

  // convert date string into a proper `Date`
  const date = new Date(metadata.date)
  //const opt = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  const datestr = date2str(metadata.date, 'yyyy-MM-dd');
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