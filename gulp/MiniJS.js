import gulp from 'gulp';
import minificarJS from 'gulp-minify.js';
import concat from 'gulp-concat';
import wrap from 'gulp-wrap';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Caminhos
const paths = {
  js: path.join(__dirname, '../resources/js/sessoes/*.js'),
  dest: path.join(__dirname, '../public/js/')
};

// Função para minificar, concatenar, envolver e gerar source maps
export function MinificarConcatenarJS() {
  return gulp.src(paths.js)
    .pipe(minificarJS())                  // 2. Minificar
    .pipe(concat('app.min.js'))           // 3. Concatenar
    .pipe(wrap(`window.addEventListener('load', function() {\n<%= contents %>\n});`)) // 4. Envolver
    .pipe(gulp.dest(paths.dest));         // 6. Salvar no destino
}

// Watch para mudanças
export function AssistirJS() {
    return gulp.watch(paths.js, MinificarConcatenarJS);
}

// Exportar padrão
export default gulp.series(MinificarConcatenarJS, AssistirJS);