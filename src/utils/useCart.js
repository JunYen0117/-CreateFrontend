import React, { useReducer, useContext, createContext, useEffect } from 'react';
import { reducer, init } from './cartReducer';
import useLocalStorage from './useLocalstorage';

// 為了 全域 傳 props 使用
// import { useContext, createContext } from 'react'
const CartContext = createContext(null);
// CartProvider () {
//   return (
//     // 此處 傳遞 props
//     <CartContext.Provider
//       value={{
//         cart: state,
//         items: state.items,
//         addItem,
//         removeItem,
//         updateItem,
//         clearCart,
//         isInCart,
//         plusOne,
//         minusOne,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }
// export const useCart = () => useContext(CartContext)

// 在 cartReducer 宣告
// initialState = {
//   items: [],
//   isEmpty: true,
//   totalItems: 0,
//   cartTotal: 0,
// }

// item = {
//   id: '',
//   quantity: 0,
//   name: '',
//   price: 0,
// }

// 此處 設定 localStorageKey 的預設值 = 'cart'
// 可以在 APP.js 自行設定 localStorageKey 的值
export const CartProvider = ({
  children,
  initialCartItems = [],
  localStorageKey = 'cart',
}) => {
  // if localStorage has value with this key then use it to initialCartItems
  let items = initialCartItems;

  // 如果 購物車 是空的
  if (!items.length) {
    try {
      // 生成 localStorage 且 Key = localStorageKey (預設值為 cart)
      const item = window.localStorage.getItem(localStorageKey);
      // 將 localStorage 的資料，解析成 json 格式，存到 items
      items = item ? JSON.parse(item) : [];
    } catch (error) {
      items = [];
      console.log(error);
    }
  }

  // ※ useState
  // const [state, setState] = useState()
  // ※ useReducer
  // const [state, dispatch] = useReducer(reducer, items, init);
  // 用 dispatch(action) 方法 來修改 state 的值
  // action = {type: 'ADD_ITEM', payload: item}
  // init state
  const [state, dispatch] = useReducer(reducer, items, init);

  // init setValue(localStoage)
  // 根據 localStorage 的 Key 取出 keyValue 和 setKeyValue
  const [storedValue, setValue] = useLocalStorage(localStorageKey, items);

  // 當 state 發生改變 -> 設定新的 state 到 localStorage
  useEffect(() => {
    if (JSON.stringify(state.items) !== storedValue) {
      setValue(state.items);
    }
  }, [state]);

  /**
   * 加入新項目(quantity:1)，重覆項目 quantity: quantity + 1
   * @param  {Object} item
   * @returns {void}
   */
  // dispatch(action)
  // item = { id: xxx , price: xxx }
  const addItem = (item) => {
    dispatch({
      // 當 action.type = 'ADD_ITEM'
      // 呼叫 cartReducer 的 addItem 方法
      type: 'ADD_ITEM',
      // action.payload
      payload: item,
    });
  };

  /**
   * 給定一id值，將這商品移出陣列中
   * @param {string} id
   * @returns {void}
   */
  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        id,
      },
    });
  };

  /**
   * 給定一item物件，依照id尋找後更新其中的屬性值
   * @param {Object} item
   * @returns {void}
   */
  const updateItem = (item) => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: item,
    });
  };

  /**
   * 清空整個購物車
   * @returns {void}}
   */
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  /**
   * 給定一id值，回傳是否存在於購物車中
   * @param {string} id
   * @returns {boolean}
   */
  const isInCart = (id) => {
    return state.items.some((item) => item.id === id);
  };

  /**
   * 給定一id值，有尋找到商品時，設定quantity: quantity + 1
   * @param {string} id
   * @returns {void}
   */
  const plusOne = (id) => {
    return dispatch({
      type: 'PLUS_ONE',
      payload: {
        id,
      },
    });
  };

  /**
   * 給定一id值，有尋找到商品時，設定quantity: quantity - 1，但 quantity 最小值為1
   * @param {string} id
   * @returns {void}
   */
  const minusOne = (id) => {
    return dispatch({
      type: 'MINUS_ONE',
      payload: {
        id,
      },
    });
  };

  return (
    // 此處 傳遞 props
    <CartContext.Provider
      value={{
        cart: state,
        items: state.items,
        addItem,
        removeItem,
        updateItem,
        clearCart,
        isInCart,
        plusOne,
        minusOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
