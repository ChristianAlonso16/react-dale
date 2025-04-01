// src/app/utils/alerts.js (o donde lo tengas)
import Swal from "sweetalert2";

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

const loading = async () => {
    Swal.fire({
        title: "Cargando...",
        text: "Por favor espere...",
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading();
        },
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
    loading,
    confirmSome
};
