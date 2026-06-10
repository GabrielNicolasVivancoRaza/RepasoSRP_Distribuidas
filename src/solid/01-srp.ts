interface User {
    id: number;
    name: string;
}

class SubscriptionBloc {

    onAddSubscription(subscriptionId: number) {
        console.log('Agregando suscripción:', subscriptionId);
    }

}

class UserBloc {

    loadUser(id: number) {
        console.log('Cargando usuario con id:', id);
    }

    saveUser(user: User) {
        console.log('Guardando en base de datos:', user);
    }

    notifyUser() {
        console.log('Enviando correo a los usuarios');
    }

}

const userBloc = new UserBloc();
const subscriptionBloc = new SubscriptionBloc();

subscriptionBloc.onAddSubscription(1234);