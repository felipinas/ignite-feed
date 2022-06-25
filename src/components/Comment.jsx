import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(props) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/felipinas.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Felipe</strong>
              
              <time title='11 de maio às 08h13' dateTime="2022-04-11 08:14:56">
                Cerca de 2h
              </time>
            </div>
            
            <button title="Excluir">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}