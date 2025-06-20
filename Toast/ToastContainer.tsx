// toast/ToastContainer.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import { setToastRef, ToastOptions } from './toastService';

const SCREEN_WIDTH = Dimensions.get('window').width;

const COLORS = {
    success: '#4CAF50',
    error: '#F44336',
    info: '#2196F3',
    warning: '#FFC107',
    announcement: '#2196F3',
};

const ICONS = {
    success: require('./ToastIcons/ok.png'),
    error: require('./ToastIcons/error.png'),
    warning: require('./ToastIcons/warning.png'),
    info: require('./ToastIcons/info.png'),
    announcement: require('./ToastIcons/announcement.png'),
};

const ToastContainer = () => {
    const [visible, setVisible] = useState(false);
    const [options, setOptions] = useState<ToastOptions | null>(null);
    const translateY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setToastRef(show);
    }, []);

    const show = (opts: ToastOptions) => {
        setOptions(opts);
        setVisible(true);

        const isBottom = opts.position === 'bottom';
        const fromValue = isBottom ? 100 : -100;
        const toValue = isBottom ? 100 : -100;

        translateY.setValue(fromValue);

        Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
        }).start();

        setTimeout(() => {
          Animated.timing(translateY, {
            toValue,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setVisible(false);
          });
        }, opts.duration || 2000);
    };

    if (!visible || !options) return null;

    const type = options.type || 'info';
    const variant = options.variant || 'soft';
    const icon = ICONS[type] || ICONS.info;
    const borderColor = COLORS[type];
    const textColor = variant === 'hard' ? '#fff' : options.textColor || borderColor;
    const isBottom = options.position === 'bottom';

    return (
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
            <Animated.View
                style={[
                    styles.toast,
                    {
                        backgroundColor: variant === 'hard' ? borderColor : '#fff',
                        borderColor,
                        borderWidth: 2,
                        transform: [{ translateY }],
                        top: isBottom ? undefined : 40,
                        bottom: isBottom ? 40 : undefined,
                        flexDirection: 'row',
                    },
                ]}
            >
                <View style={[styles.iconWrapper, { borderColor }]}>
                    <Image
                        source={icon}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 50,
                        }}
                    />
                </View>

                <View style={styles.textWrapper}>
                    <Text style={[styles.title, { color: textColor }]}>{options.message1}</Text>
                    {options.message2 && (
                        <Text style={[styles.subtitle, { color: textColor , overflow:'hidden'}]}>
                            {options.message2}
                        </Text>
                    )}
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default ToastContainer;

const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        left: 16,
        right: 16,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 16,
        zIndex: 9999,
        alignSelf: 'center',
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
        maxWidth: SCREEN_WIDTH - 32,
    },
    iconWrapper: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
    },
    textWrapper: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 2,
        color: '#333',
    },
    subtitle: {
        fontSize: 13,
        color: '#666',
    },
});
