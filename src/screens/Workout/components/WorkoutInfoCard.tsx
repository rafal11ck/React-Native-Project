import { useState } from 'react';
import { MediaType, launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker';
import { StyleSheet } from 'react-native';
import PhotoPicker from './PhotoPicker';
import Card from 'src/components/Card';
import WorkoutTitle from './WorkoutTitle';

async function getMediaUri(source: 'images' | 'camera') {
    const options: { mediaTypes: MediaType[]; quality: number } = {
        mediaTypes: ['images'],
        quality: 1
    };

    const result =
        source === 'images'
            ? await launchImageLibraryAsync(options)
            : await launchCameraAsync(options);

    return result.assets?.at(0)?.uri ?? '';
}

export default function WorkoutInfoCard() {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [imageUri, setImageUri] = useState('');
    const [title, setTitle] = useState('');

    const showDialog = () => {
        setDialogVisible(true);
    };

    const hideDialog = () => {
        setDialogVisible(false);
    };

    const handleMediaPick = async (source: 'images' | 'camera') => {
        setImageUri(await getMediaUri(source));
        hideDialog();
    };

    const handleMediaDelete = () => {
        setImageUri('');
    };

    const handleTitleInput = (text: string) => {
        setTitle(text);
    };

    return (
        <Card>
            <PhotoPicker
                dialogVisible={dialogVisible}
                imageUri={imageUri}
                onButtonClick={showDialog}
                onDialogCancel={hideDialog}
                onMediaDelete={handleMediaDelete}
                onImagePick={() => handleMediaPick('images')}
                onPhotoPick={() => handleMediaPick('camera')}
            />
            <WorkoutTitle value={title} onChangeText={handleTitleInput} />
        </Card>
    );
}

const styles = StyleSheet.create({});
