import styles from './List.scss';

export default function List() {
  const listComponent = document.createElement('DIV');
  listComponent.className = styles.list;
  listComponent.innerHTML = 'List component';

  return listComponent;
}