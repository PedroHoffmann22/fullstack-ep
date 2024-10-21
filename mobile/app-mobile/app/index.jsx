import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { Link } from 'expo-router'

export default function FullStack() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/linear-icon-8/background-music-01.png' }} 
                    style={styles.logoImage} 
                />
                <Text style={styles.logoText}>EP SONG</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={usuario}
                onChangeText={setUsuario}
                placeholderTextColor="#c4c4c4"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                placeholderTextColor="#c4c4c4"
            />

            <Text style={styles.recoverPassword}>Recuperar senha</Text>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </Pressable>
            <Link href="/cadastro">
                <Text style={styles.createAccountText}>Criar cadastro</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#80c5cc',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    logoImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    logoText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 20,
        fontSize: 16,
    },
    recoverPassword: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'right',
        width: '80%',
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#000',
    },
    createAccountButton: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createAccountText: {
        fontSize: 16,
        color: '#fff',
    },
});