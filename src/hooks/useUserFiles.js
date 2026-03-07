import { useMemo, useState } from 'react';
import { allUsersTempl } from '../data/allUsersTempl';
import { createUserFile } from '../utils/fileHelpers';

export const useUserFiles = () => {
    const [users, setUsers] = useState(allUsersTempl);

    const currentUser = users[0];

    const files = useMemo(() => {
        return currentUser?.files || [];
    }, [currentUser]);

    const addFileToCurrentUser = (selectedFile) => {
        if (!selectedFile) return;

        const fileData = createUserFile(selectedFile);

        setUsers((prevUsers) =>
            prevUsers.map((user, index) => {
                if (index !== 0) return user;

                return {
                    ...user,
                    files: [fileData, ...user.files],
                };
            })
        );
    };

    return {
        users,
        currentUser,
        files,
        addFileToCurrentUser,
    };
};
