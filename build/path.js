modulex.add("path",[],function(n,r,e){function t(n){var r=n.split(/\/+/);return r[r.length-1]||(r=r.slice(0,-1)),r[0]||(r=r.slice(1)),r}function i(n,r){for(var e,t=0,i=n.length-1,o=[];i>=0;i--)e=n[i],"."!==e&&(".."===e?t++:t?t--:o[o.length]=e);if(r)for(;t--;t)o[o.length]="..";return o=o.reverse()}var o=/^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/,a={version:"1.0.2",_debug:"",resolve:function(){var n,r,e,o="",a=arguments,l=0;for(r=a.length-1;r>=0&&!l;r--)e=a[r],"string"==typeof e&&e&&(o=e+"/"+o,l="/"===e.charAt(0));return n=i(t(o),!l).join("/"),(l?"/":"")+n||"."},normalize:function(n){var r="/"===n.charAt(0),e="/"===n.slice(-1);return n=i(t(n),!r).join("/"),n||r||(n="."),n&&e&&(n+="/"),(r?"/":"")+n},join:function(){var n=Array.prototype.slice.call(arguments);return a.normalize(n.join("/"))},relative:function(n,r){n=a.normalize(n),r=a.normalize(r);var e,i,o=t(n),l=[],c=t(r),u=Math.min(o.length,c.length);for(e=0;u>e&&o[e]===c[e];e++);for(i=e;e<o.length;)l.push(".."),e++;return l=l.concat(c.slice(i)),l.join("/")},basename:function(n,r){var e,t=n.match(o)||[];return e=t[3]||"",r&&e&&e.slice(-1*r.length)===r&&(e=e.slice(0,-1*r.length)),e},dirname:function(n){var r=n.match(o)||[],e=r[1]||"",t=r[2]||"";return e||t?(t&&(t=t.substring(0,t.length-1)),e+t):"."},extname:function(n){return(n.match(o)||[])[4]||""}};e.exports=a});