import { StoreSlice } from './store';
import { ChatInterface, MessageInterface } from '@type/chat';

export interface ChatSlice {
  messages: MessageInterface[];
  chats?: ChatInterface[];
  currentChatIndex: number;
  generating: boolean;
  error: string;
  foldersName: string[];
  foldersExpanded: boolean[];
  setMessages: (messages: MessageInterface[]) => void;
  setChats: (chats: ChatInterface[]) => void;
  setCurrentChatIndex: (currentChatIndex: number) => void;
  setGenerating: (generating: boolean) => void;
  setError: (error: string) => void;
  setFoldersName: (foldersName: string[]) => void;
  setFoldersExpanded: (foldersExpanded: boolean[]) => void;
}

export const createChatSlice: StoreSlice<ChatSlice> = (set, get) => ({
  messages: [],
  currentChatIndex: -1,
  generating: false,
  error: '',
  foldersName: [],
  foldersExpanded: [],
  setMessages: (messages: MessageInterface[]) => {
    set((prev: ChatSlice) => ({
      ...prev,
      messages: messages,
    }));
  },
  setChats: (chats: ChatInterface[]) => {
    set((prev: ChatSlice) => ({
      ...prev,
      chats: chats,
    }));
  },
  setCurrentChatIndex: (currentChatIndex: number) => {
    set((prev: ChatSlice) => ({
      ...prev,
      currentChatIndex: currentChatIndex,
    }));
  },
  setGenerating: (generating: boolean) => {
    set((prev: ChatSlice) => ({
      ...prev,
      generating: generating,
    }));
  },
  setError: (error: string) => {
    set((prev: ChatSlice) => ({
      ...prev,
      error: error,
    }));
  },
  setFoldersName: (foldersName: string[]) => {
    set((prev: ChatSlice) => ({
      ...prev,
      foldersName: foldersName,
    }));
  },
  setFoldersExpanded: (foldersExpanded: boolean[]) => {
    set((prev: ChatSlice) => ({
      ...prev,
      foldersExpanded: foldersExpanded,
    }));
  },
});
