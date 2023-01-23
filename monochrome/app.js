const ADD_TO_CART_EVENT = 'cart/productAdded';
const REMOVE_FROM_CART_EVENT = 'cart/productRemoved';
const ADD_TO_WL_EVENT = 'wl/productAdded';
const REMOVE_FROM_WL_EVENT = 'wl/productRemoved';

class NewsletterForm extends React.Component {
  state = {
    email: '',
    formMessage: '',
    busy: false,
    submitted: false,
    successMessage: '',
  };

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  onSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;

    this.setState({
      formMessage: '',
    });

    if (!this.validateEmail(email)) {
      this.setState({
        formMessage: 'Please use a valid email',
      });

      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      this.setState({
        busy: false,
        email: '',
        submitted: true,
        successMessage: `${this.state.email} submitted!`,
      });
    }, 3000);
  };

  onInputChange = (event) => {
    const email = event.target.value;

    this.setState({
      email,
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="container success-subscribed-msg">
          {this.state.successMessage}
        </div>
      );
    }

    return (
      <form
        action=""
        className="form-newsletter container"
        onSubmit={this.onSubmit}
      >
        <label htmlFor="email-newsletter">sign up for our newsletter</label>
        <input
          type="text"
          name="email-newsletter"
          id="email-newsletter"
          value={this.state.email}
          onChange={this.onInputChange}
          placeholder="email..."
        ></input>

        <div className="form-message">{this.state.formMessage}</div>

        <button type="submit">
          <img
            src="images/Spinner.svg"
            alt="Loading"
            className={this.state.busy ? 'spinner' : 'd-none'}
          ></img>

          {this.state.busy ? 'Loading' : 'Subscribe'}
        </button>
      </form>
    );
  }
}

const newsletterContainer = document.querySelector(
  '.footer-sign-up-newsletter',
);
ReactDOM.createRoot(newsletterContainer).render(
  <NewsletterForm></NewsletterForm>,
);

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      busy: false,
      inCart: false,
    };
  }

  onClick = () => {
    this.setState({
      busy: true,
    });

    setTimeout(() => {
      dispatchEvent(
        new CustomEvent(
          this.state.inCart ? REMOVE_FROM_CART_EVENT : ADD_TO_CART_EVENT,
          {
            detail: {
              productId: this.props.productId,
            },
          },
        ),
      );

      this.setState({
        busy: false,
        inCart: !this.state.inCart,
      });
    }, 2000);
  };

  render() {
    const productInCart = this.state.inCart;

    return (
      <a
        onClick={this.onClick}
        href="#"
        className={`product-control ${productInCart ? 'added' : ''}`}
        title={`${productInCart ? 'Remove from' : 'Add to'} cart`}
        disabled={this.state.busy}
      >
        {this.state.inCart ? (
          <i class="far fa-minus-square"></i>
        ) : (
          <i className="far fa-plus-square"></i>
        )}
      </a>
    );
  }
}

class AddToWishlistButton extends React.Component {
  state = {
    busy: false,
    inWl: false,
  };

  onClick = () => {
    this.setState({
      busy: true,
    });

    setTimeout(() => {
      dispatchEvent(
        new CustomEvent(
          this.state.inWl ? REMOVE_FROM_WL_EVENT : ADD_TO_WL_EVENT,
          {
            detail: {
              productId: this.props.productId,
            },
          },
        ),
      );

      this.setState({
        busy: false,
        inWl: !this.state.inWl,
      });
    }, 2000);
  };

  render() {
    const productInWl = this.state.inWl;

    return (
      <a
        onClick={this.onClick}
        href="#"
        title={`${productInWl ? 'Remove from' : 'Add to'} Wishlist`}
        className={`product-control ${productInWl ? 'added' : ''}`}
        disabled={this.state.busy}
      >
        {productInWl ? (
          <i className="fas fa-heart"></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
      </a>
    );
  }
}

class ProductTileControls extends React.Component {
  render() {
    return (
      <>
        <AddToCartButton productId={this.props.productId}></AddToCartButton>
        <AddToWishlistButton
          productId={this.props.productId}
        ></AddToWishlistButton>
      </>
    );
  }
}

const productTileControls = document.querySelectorAll('.product-tile-controls');
productTileControls.forEach((productTileControl, index) => {
  ReactDOM.createRoot(productTileControl).render(
    <ProductTileControls productId={index}></ProductTileControls>,
  );
});

class CartCounter extends React.Component {
  state = {
    cartItemsCount: 0,
    cartItems: [],
  };

  productCartAction = (event) => {
    const { detail, type: eventType } = event;
    const { productId } = detail;
    const cartItems = this.state.cartItems.slice();

    switch (eventType) {
      case ADD_TO_CART_EVENT:
        cartItems.push(productId);
        this.setState({
          cartItems,
          cartItemsCount: this.state.cartItemsCount + 1,
        });
        break;

      case REMOVE_FROM_CART_EVENT:
        this.setState({
          cartItemsCount: this.state.cartItemsCount - 1,
          cartItems: cartItems.filter((productId) => {
            return productId !== detail.productId;
          }),
        });
        break;
    }
  };

  componentDidMount() {
    addEventListener(ADD_TO_CART_EVENT, this.productCartAction);
    addEventListener(REMOVE_FROM_CART_EVENT, this.productCartAction);
  }

  componentWillUnmount() {
    removeEventListener(ADD_TO_CART_EVENT, this.productCartAction);
    removeEventListener(REMOVE_FROM_CART_EVENT, this.productCartAction);
  }

  render() {
    return (
      <div
        className="header-counter"
        onClick={() => {
          alert(this.state.cartItems);
        }}
      >
        {this.state.cartItemsCount > 0 ? (
          <span className="qty">{this.state.cartItemsCount}</span>
        ) : (
          <></>
        )}
        <i className="fas fa-shopping-bag"></i>
      </div>
    );
  }
}

class WishlistCounter extends React.Component {
  state = {
    items: [],
    itemsCount: 0,
  };

  wishlistAction = (event) => {
    const { detail, type: eventType } = event;
    const { productId } = detail;

    if (eventType === ADD_TO_WL_EVENT) {
      const items = this.state.items.slice();
      items.push(productId);

      this.setState({
        items,
        itemsCount: this.state.itemsCount + 1,
      });

      return;
    }

    if (eventType === REMOVE_FROM_WL_EVENT) {
      this.setState({
        items: this.state.items.filter((productId) => {
          return productId !== detail.productId;
        }),
        itemsCount: this.state.itemsCount - 1,
      });

      return;
    }
  };

  componentDidMount() {
    addEventListener(ADD_TO_WL_EVENT, this.wishlistAction);
    addEventListener(REMOVE_FROM_WL_EVENT, this.wishlistAction);
  }

  componentWillUnmount() {
    removeEventListener(ADD_TO_WL_EVENT, this.wishlistAction);
    removeEventListener(REMOVE_FROM_WL_EVENT, this.wishlistAction);
  }

  render() {
    return (
      <div
        className="header-counter"
        onClick={() => {
          alert(this.state.items);
        }}
      >
        {this.state.itemsCount > 0 ? (
          <span className="qty">{this.state.itemsCount}</span>
        ) : (
          <></>
        )}
        <i className="far fa-heart"></i>
      </div>
    );
  }
}

class HeaderCounters extends React.Component {
  state = {
    wlDisplayed: true,
  };

  render() {
    return (
      <>
        <CartCounter></CartCounter>
        {this.state.wlDisplayed === true ? (
          <WishlistCounter></WishlistCounter>
        ) : (
          <></>
        )}

        <button
          type="button"
          onClick={() => {
            this.setState({ wlDisplayed: !this.state.wlDisplayed });
          }}
        >
          Toggle
        </button>
      </>
    );
  }
}

const headerCounters = document.querySelector('.header-counters');
const root = ReactDOM.createRoot(headerCounters);
root.render(<HeaderCounters></HeaderCounters>);
