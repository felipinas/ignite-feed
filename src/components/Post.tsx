import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  id: number;
  type: string;
  content: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    
    setComments([...comments, newCommentText]);

    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    const newCommentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    });

    setComments(newCommentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          switch (line.type) {
            case 'paragraph':
              return <p key={line.id}>{line.content}</p>
            case 'link':
              return <p key={line.id}> <a href="#">{line.content}</a> </p>;
            default:
              return null;
          }
        })}
      </div>

		  <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
			  <strong>Deixe seu feedback</strong>

			  <textarea
				  placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
			  />
        
        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
		  </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}