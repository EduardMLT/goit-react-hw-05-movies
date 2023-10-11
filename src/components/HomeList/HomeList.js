import { Link } from 'react-router-dom';
import { List, Item, TitleSpan } from './HomeList.styled';

export const HomeList = ({ items, state }) => {
  return (
    <List>
      {items.map(({ id, original_title }) => {
        return (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={state}>
              <TitleSpan>{original_title}</TitleSpan>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};
