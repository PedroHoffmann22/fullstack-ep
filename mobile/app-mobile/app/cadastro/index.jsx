import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { Link } from 'expo-router'

export default function FullStack() {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

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
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                placeholderTextColor="#c4c4c4"
            />

            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Data de Nascimento"
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                    placeholderTextColor="#c4c4c4"
                />
                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                    placeholderTextColor="#c4c4c4"
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
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

            <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
                placeholderTextColor="#c4c4c4"
            />

            <View style={styles.row}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Criar</Text>
                </Pressable>
                <Link href="../">
                    <Text style={styles.buttonText}>Cancelar</Text>
                </Link>
            </View>
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
    halfInput: {
        width: '%', 
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    button: {
        width: '45%', 
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#000',
    },
});