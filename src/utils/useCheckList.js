import { useState, useContext, createContext } from 'react';

export const CheckListContext = createContext(null);

export function CheckListProvider({ children }) {
  // 加選購物車商品的清單
  const [checkList, setCheckList] = useState([]);

  // 購物車勾選的商品總金額
  const calcCheckListTotal = () =>
    checkList.reduce((total, item) => total + item.price * item.quantity, 0);

  // 購物車勾選的商品總數量
  const calcCheckListItems = () =>
    checkList.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CheckListContext.Provider
      value={{
        checkList,
        setCheckList,
        checkListTotal: calcCheckListTotal(),
        checkListItems: calcCheckListItems(),
      }}
    >
      {children}
    </CheckListContext.Provider>
  );
}

export const useCheckList = () => useContext(CheckListContext);
