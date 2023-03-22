// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function ProductBanner(props) {
  const { content } = props;

  return (
    <section className="banner">
      <div className="banner-main">
        <h4 className="banner-main__title">{content.title}</h4>
        <p className="banner-main__description">{content.description}</p>
      </div>
      <div className="banner-img--wrapper">
        <img
          src={content.img}
          alt={content.description}
          className="banner-img"
        />
      </div>
    </section>
  );
}

ProductBanner.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    img: PropTypes.node.isRequired,
  }),
};

ProductBanner.defaultProps = {
  content: {
    title: 'Shop',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit necessitatibus veritatis deserunt et eum eius pariatur earum quaerat quod.',
    img: '',
  },
};

export default ProductBanner;