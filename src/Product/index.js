import styles from './Product.scss';

export default function Product() {
  const element = document.createElement('div');
  element.className = styles.product;
  element.innerHTML = 'Hello' + ' webpack';

  return element;
}