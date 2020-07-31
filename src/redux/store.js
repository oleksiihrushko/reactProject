import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import exchangeRatesReducer from "./exchange/exchangeRatesReducer"
// import operationsReducer from './operations/operationsReducer';
// import statisticsReducer from './statistics/statisticsReducer';
import authReducer from "./auth/authReducer";
import modalSlice from "./modal/modalSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    exchangeRatesRoot: exchangeRatesReducer,
    isShowModal: modalSlice.reducer,
    // operations: operationsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    // statistics: statisticsReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
