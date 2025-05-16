import gulp from 'gulp';
import { MinificarConcatenarCSS, AssistirCSS } from './gulp/MiniCSS.js';
import { MinificarConcatenarHTML, AssistirHTML } from './gulp/MiniHTML.js';
import { MinificarConcatenarJS, AssistirJS } from './gulp/MiniJS.js';

gulp.task('default', gulp.parallel(
    MinificarConcatenarCSS,
    AssistirCSS,
    MinificarConcatenarHTML,
    AssistirHTML,
    MinificarConcatenarJS,
    AssistirJS
));   