import { create } from 'zustand';
import { db } from "@/Services/firebaseConfig";
import { collection, addDoc, doc, updateDoc, getDocs, query, where } from 'firebase/firestore';

const useUsersStore = create((set, get) => ({
  // Initial state
  users: [],

  // ✅ Fetch users (only fetch users that are NOT deleted)
  fetchUsers: async () => {
    try {
      const q = query(collection(db, 'users'), where("deleted", "==", false));
      const snapshots = await getDocs(q);
      const usersData = snapshots.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));

      set({ users: usersData });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },

  // ✅ Add new user with deleted = false by default
  addNewUser: async (newUser) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        ...newUser,
        deleted: false,
      });

      set({
        users: [...get().users, { id: docRef.id, ...newUser, deleted: false }],
      });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  },

  // ✅ Edit user and update Firestore + UI
  editUser: async (userId, newDetails) => {
    try {
      await updateDoc(doc(db, 'users', userId), newDetails);
      set((state) => ({
        users: state.users.map((user) =>
          user.id === userId ? { ...user, ...newDetails } : user
        ),
      }));
    } catch (error) {
      console.error("Error editing user:", error);
    }
  },

  // ✅ Soft delete user: hide from UI but keep in Firestore
  deleteUser: async (userId) => {
    try {
      // Instead of removing the document, we mark it as deleted
      await updateDoc(doc(db, 'users', userId), { deleted: true });

      // Update UI immediately to remove deleted user
      set((state) => ({
        users: state.users.filter((user) => user.id !== userId),
      }));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  },
}));

export default useUsersStore;
