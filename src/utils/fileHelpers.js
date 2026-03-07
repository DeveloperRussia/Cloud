export const FILE_FILTERS = ['Documents', 'Photos', 'Videos', 'Compressed ZIPs', 'Audio'];

export const getFileCategory = (file) => {
    const fileName = file.name.toLowerCase();
    const mimeType = (file.type || '').toLowerCase();

    if (mimeType.startsWith('image/')) return 'Photos';
    if (mimeType.startsWith('video/')) return 'Videos';
    if (mimeType.startsWith('audio/')) return 'Audio';

    if (
        mimeType.includes('zip') ||
        mimeType.includes('rar') ||
        mimeType.includes('7z') ||
        fileName.endsWith('.zip') ||
        fileName.endsWith('.rar') ||
        fileName.endsWith('.7z')
    ) {
        return 'Compressed ZIPs';
    }

    return 'Documents';
};

export const getFilePreviewType = (file) => {
    const fileName = file.name.toLowerCase();

    if (fileName.endsWith('.pdf')) return 'pdf';
    if (fileName.endsWith('.ppt') || fileName.endsWith('.pptx')) return 'ppt';

    if (fileName.endsWith('.xls') || fileName.endsWith('.xlsx') || fileName.endsWith('.csv')) {
        return 'xls';
    }

    if (fileName.endsWith('.txt')) return 'txt';
    if (fileName.endsWith('.docx')) return 'docx';
    if (fileName.endsWith('.doc')) return 'doc';

    if (
        fileName.endsWith('.png') ||
        fileName.endsWith('.jpg') ||
        fileName.endsWith('.jpeg') ||
        fileName.endsWith('.svg') ||
        fileName.endsWith('.webp')
    ) {
        return 'png';
    }

    if (fileName.endsWith('.mp3') || fileName.endsWith('.wav')) return 'mp3';

    if (fileName.endsWith('.mp4') || fileName.endsWith('.mov') || fileName.endsWith('.avi')) {
        return 'mp4';
    }

    if (fileName.endsWith('.zip') || fileName.endsWith('.rar') || fileName.endsWith('.7z')) {
        return 'zip';
    }

    if (fileName.endsWith('.sql')) return 'sql';
    if (fileName.endsWith('.html') || fileName.endsWith('.htm')) return 'html';
    if (fileName.endsWith('.eml')) return 'eml';
    if (fileName.endsWith('.fig')) return 'fig';
    if (fileName.endsWith('.psd')) return 'psd';
    if (fileName.endsWith('.ai')) return 'ai';
    if (fileName.endsWith('.indd')) return 'indd';
    if (fileName.endsWith('.aep') || fileName.endsWith('.ae')) return 'ae';
    if (fileName.endsWith('.sketch')) return 'sketch';

    if (fileName.endsWith('.obj') || fileName.endsWith('.fbx') || fileName.endsWith('.stl')) {
        return 'threeD';
    }

    if (fileName.endsWith('.ics')) return 'cal';

    return 'file';
};

export const getFileSpriteIcon = (previewType) => {
    return previewType || 'file';
};

export const createUserFile = (selectedFile) => {
    const previewType = getFilePreviewType(selectedFile);
    const category = getFileCategory(selectedFile);

    return {
        id: Date.now(),
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        category,
        previewType,
        preview: '',
        file: selectedFile,
        createdAt: new Date().toISOString(),
    };
};

export const cutFileName = (name, max = 18) => {
    if (name.length <= max) return name;
    return `${name.slice(0, max - 3)}...`;
};

export const getUniqueFoldersFromFiles = (files) => {
    const uniqueFolders = [];
    const usedNames = new Set();

    files.forEach((file) => {
        if (!usedNames.has(file.category)) {
            usedNames.add(file.category);
            uniqueFolders.push({
                id: file.category,
                name: file.category,
            });
        }
    });

    return uniqueFolders;
};

export const filterFilesByType = (files, selectedFilter) => {
    if (selectedFilter === 'All') return files;
    return files.filter((file) => file.category === selectedFilter);
};
