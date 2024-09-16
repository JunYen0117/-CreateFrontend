export const initialState = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  cartTotal: 0,
};

// 透過 addItem 設定 item 的內容
// const item = action.payload = {
//   id: '',
//   quantity: 0,
//   name: '',
//   price: 0,
//   color: '',
//   size: '',
// }

/**
 * addItem only, duplicate item is not allow
 * @param  {} state
 * @param  {} action
 */

// action = {type: 'ADD_ITEM', payload: item}

const addItem = (state, action) => {
  // 透過 id 尋找 已經存在購物車商品 的 Index
  // 如果沒找到，則回傳 -1
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );

  // 要加入的商品數量
  const payloadQuantity = action.payload.quantity;

  // 如果 購物車 存在該商品 則 該商品數量 +1
  if (existingItemIndex > -1) {
    // 根據 index 尋找到 存在購物車內的商品
    const item = state.items[existingItemIndex];
    // 取得 productId
    const id = item.id;
    // 如果 商品存在 則 商品數量 = 載入頁面的商品數量
    // 如果 商品不存在 則 state.items[existingItemIndex].quantity + 1
    const quantity = payloadQuantity
      ? item.quantity + payloadQuantity
      : item.quantity + 1;

    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    };

    return updateItem(state, action);
  }
  return [...state.items, action.payload];
};

const removeItem = (state, action) => {
  return state.items.filter((item) => item.id !== action.payload.id);
};

/**
 * updateItem (ex. quantity, color, name, price...)
 * ex. action = {type="UPDATE_ITEM", payload: {id:1, quantity:1, color:'red'}
 * @param  {} state
 * @param  {} action
 */

// 依 商品 id 更新商品
const updateItem = (state, action) => {
  // 尋找 已經在購物車的商品 的 Index
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );
  // 如果 該商品 存在購物車
  if (existingItemIndex > -1) {
    const newState = [...state.items];
    // 找到對應的商品物件，更新 或 增加 商品的內容
    newState[existingItemIndex] = {
      ...newState[existingItemIndex],
      ...action.payload,
    };
    return newState;
  }
  // 如果商品不存在購物車，則 return 原來的 items
  return [...state.items];
};

// 依 商品 id 增加 商品數量
const plusItemQuantityOnce = (state, action) => {
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );

  if (existingItemIndex > -1) {
    //const newState = [...state.items]
    const item = state.items[existingItemIndex];
    const id = item.id;
    // 購物車內的商品數量 + 1
    const quantity = item.quantity + 1;

    //  更新商品的 quantity
    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    };

    return updateItem(state, action);
  }

  return [...state.items];
};

// 依 商品 id 減少 商品數量
const minusItemQuantityOnce = (state, action) => {
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );

  if (existingItemIndex > -1) {
    const item = state.items[existingItemIndex];
    const id = item.id;
    // 如果 購物車內的商品數量 > 1 則 商品數量 - 1
    // 否則 商品數量最低為1
    const quantity = item.quantity > 1 ? item.quantity - 1 : 1;

    //  更新商品的 quantity
    const action = {
      type: 'UPDATE_ITEM',
      payload: { id, quantity },
    };

    return updateItem(state, action);
  }

  return [...state.items];
};

// 在每個 item，增加 itemTotal 屬性 放 商品小計
const calculateItemTotals = (items) =>
  items.map((item) => ({
    ...item,
    itemTotal: item.price * item.quantity,
  }));

// 計算購物車 總金額
const calculateTotal = (items) =>
  items.reduce((total, item) => total + item.quantity * item.price, 0);

// 計算購物車 總數量
const calculateTotalItems = (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0);

// initialState = {
//   items: [],
//   isEmpty: true,
//   totalItems: 0,
//   cartTotal: 0,
// }

// initialState = 初始化狀態
// state = localStorage 的 state
// 生成購物車
const generateCartState = (state, items) => {
  // 如果購物車是空的 isEmpty = true
  // 如果購物車有東西 isEmpty = false
  const isEmpty = items.length === 0;

  return {
    ...initialState,
    ...state,
    items: calculateItemTotals(items),
    totalItems: calculateTotalItems(items),
    cartTotal: calculateTotal(items),
    isEmpty,
  };
};

// 初始化購物車
// for useReducer init use
export const init = (items) => {
  return generateCartState({}, items);
};

// 把 state 相對應的 callback function 分別都變成一種 action.type
// 依照 action.type 決定要使用的方法
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return generateCartState(state, addItem(state, action));
    case 'REMOVE_ITEM':
      return generateCartState(state, removeItem(state, action));
    case 'UPDATE_ITEM':
      return generateCartState(state, updateItem(state, action));
    case 'PLUS_ONE':
      return generateCartState(state, plusItemQuantityOnce(state, action));
    case 'MINUS_ONE':
      return generateCartState(state, minusItemQuantityOnce(state, action));
    case 'CLEAR_CART':
      return initialState;
    default:
      throw new Error('No action specified');
  }
};
