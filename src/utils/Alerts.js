import Swal from "sweetalert2";
//Dentro de este archivo se generaron alertas globales para reutilizar en diferentes componentes

const showMessage = async (message, status) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: status,
        title: message
    });
};

const confirmSome = async ({ title = "¿Estás seguro?", text = "Esta acción no se puede deshacer." }) => {
    const result = await Swal.fire({
        title,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, confirmar",
        cancelButtonText: "Cancelar"
    });

    return result.isConfirmed;
};

export default {
    showMessage,
    confirmSome
};
