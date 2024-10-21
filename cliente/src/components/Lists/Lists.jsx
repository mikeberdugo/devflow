import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

export function List({
    title = 'List', // Título genérico
    placeholder = 'Add item', // Placeholder genérico
    buttonLabel = 'Add', // Label genérico del botón "Add"
    tagLabel = 'Completed', // Valor del Tag genérico
    initialItems = [], // Items iniciales
    onToggleItem = () => {}, // Función a ejecutar al alternar el estado del item
    toggleButtonLabel = 'Toggle', // Label genérico del botón "Toggle"
    undoButtonLabel = 'Undo' // Label genérico del botón "Undo"
}) {
    const [items, setItems] = useState(initialItems);
    const [newItem, setNewItem] = useState('');

    // Función para manejar el cambio en el estado de un item
    const toggleItem = (itemId) => {
        const updatedItems = items.map(item => 
            item.id === itemId ? { ...item, completed: !item.completed } : item
        );
        setItems(updatedItems);
    };

    // Función para agregar un nuevo item
    const addItem = () => {
        if (newItem) {
            const nextId = items.length + 1; // Generar un ID único
            const newItemObject = { id: nextId, name: newItem, completed: false };
            setItems([...items, newItemObject]);
            setNewItem(''); // Limpiar el campo de entrada
        }
    };

    return (
        <div className="card" style={{ minWidth: '25rem', maxWidth: '1200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: '25rem' }}>
                <h2>{title}</h2>
                <div>
                    <InputText 
                        value={newItem} 
                        onChange={(e) => setNewItem(e.target.value)} 
                        placeholder={placeholder} 
                    />
                    <Button label={buttonLabel} onClick={addItem} className="p-button-info" style={{ marginLeft: '5px' }} />
                </div>
            </div>
            <ListBox 
                value={items.filter(item => item.completed)} 
                options={items.map(item => ({
                    label: item.name, 
                    value: item.id
                }))} 
                onChange={(e) => toggleItem(e.value)} 
                listStyle={{ maxHeight: '200px'}} 
                itemTemplate={(item) => (
                    <div 
                        style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center' 
                        }}
                    >
                        <span>{item.label}</span>
                        {items.find(i => i.id === item.value).completed && (
                            <Tag severity="success" value={tagLabel} />
                        )}
                        <Button 
                            label={items.find(i => i.id === item.value).completed ? undoButtonLabel : toggleButtonLabel} 
                            onClick={(event) => {
                                event.stopPropagation(); // Para evitar que se dispare el onChange del ListBox
                                toggleItem(item.value);
                                onToggleItem(item.value); // Llamar a la función pasada como prop
                            }} 
                            className={items.find(i => i.id === item.value).completed ? 'p-button-secondary' : 'p-button-primary'} // Cambiar clase según el estado
                        />
                    </div>
                )}
            />
        </div>
    );
};
