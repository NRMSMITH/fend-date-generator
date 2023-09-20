import { useState } from "react";

export default function useModal() {
    const [modalIsOpen, setIsOpen] = useState(false);

    return {modalIsOpen, setIsOpen}
}