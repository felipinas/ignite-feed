import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/felipinas.png" />

          <div className={styles.authorInfo}>
            <strong>João Felipe</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title='11 de maio às 08h13' dateTime="2022-04-11 08:14:56">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
			  <p>Fala galeraa 👋</p>
			  <p>
			    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
			  </p>
			  <p> 👉 <a href="">jane.design/doctorcare</a> </p>
			  <p> <a href="">#novoprojeto #nlw #rocketseat</a> </p>
      </div>

		  <form className={styles.commentForm}>
			  <strong>Deixe seu feedback</strong>

			  <textarea
				  placeholder="Escreva um comentário..."
			  />
        
        <footer>
          <button type="submit">Publicar</button>
        </footer>
		  </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}