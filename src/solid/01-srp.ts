interface User {
    id: number;
    name: string;
}

class UserService {

    loadUser(id: number) {
        console.log('Cargando usuario con id:', id);
    }

    saveUser(user: User) {
        console.log('Guardando en base de datos:', user);
    }

}

class Mailer {

    sendEmail() {
        console.log('Enviando correo a los usuarios');
    }

}

class SubscriptionBloc {

    onAddSubscription(subscriptionId: number) {
        console.log('Agregando suscripción:', subscriptionId);
    }

}

class UserBloc {

}