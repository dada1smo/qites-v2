import { FunctionComponent } from 'react';
import ListItem, { ListItemProps } from '../ListItem';

interface ListProps {
  data: ListItemProps[] | any[];
  onRemove?: Function;
  transformData?: (data: any[]) => ListItemProps[];
}

const List: FunctionComponent<ListProps> = ({
  data,
  onRemove,
  transformData,
}) => {
  const items = transformData ? transformData(data) : data;

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} onRemove={onRemove} {...item} />
      ))}
    </ul>
  );
};

export default List;
