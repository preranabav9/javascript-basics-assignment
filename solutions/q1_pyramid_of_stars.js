/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (num) => {
  let star = '';
  for(let i = 0; i < num; i++) {
        for(let j = 0; j < num - i; j++) {
          star += ' ';
        }
        for(let k = 0; k <= i; k++) {
          star += '* ';
        }
       star += ' \n';
    }
  return star;
};
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
