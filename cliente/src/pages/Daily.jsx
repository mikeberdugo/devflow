import React, { useRef } from "react";
import { Base } from '../components/Base/Base';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import BasicTable from "../components/Table/BasicTable";
import { ScrollPanel } from "primereact/scrollpanel";
import { List } from "../components/Lists/Lists";


export  function Daily() {
    const stepperRef = useRef(null);
    // Datos de ejemplo

    const handleBuyItem = (itemId) => {
        console.log(`Item with ID ${itemId} was purchased or toggled.`);
    };


    return (
        <Base>
            <div className="card">
                <Accordion >
                    <AccordionTab header="Desarrollador I">
                        <div className="card flex justify-content-center">

                            <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}  headerPosition="bottom" >
                                <StepperPanel header="Results from Yesterday">
                                    <div className="flex flex-column h-20rem">
                                    <List 
                                            title="Tasks" 
                                            placeholder="Add new tasks" 
                                            buttonLabel="Add to List" 
                                            tagLabel="Finished" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="Finished" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                                { id: 10, name: 'Rice', purchased: false },
                                                { id: 11, name: 'Tomatoes', purchased: false },
                                                { id: 12, name: 'Lettuce', purchased: false },
                                                { id: 13, name: 'Carrots', purchased: false },
                                                { id: 14, name: 'Potatoes', purchased: false },
                                                { id: 15, name: 'Onions', purchased: false },
                                                { id: 16, name: 'Garlic', purchased: false },
                                                { id: 17, name: 'Apples', purchased: false },
                                                { id: 18, name: 'Bananas', purchased: false },
                                                { id: 19, name: 'Oranges', purchased: false },
                                                { id: 20, name: 'Grapes', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />
                                    </div>
                                    <div className="flex pt-8 justify-content-end">
                                        <Button label="Next" severity="secondary" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()}  rounded />
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Tasks to Execute Today">
                                    <div className="flex flex-column h-20rem">
                                        
                                    <List 
                                            title="Tasks" 
                                            placeholder="Add new tasks" 
                                            buttonLabel="Add to List" 
                                            tagLabel="Finished" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="Finished" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />

                                    </div>
                                    <div className="flex pt-8 justify-content-between">
                                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()}  rounded />
                                        <Button label="Next" severity="secondary" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()}  rounded />
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Challenges in the Process">
                                    <div className="flex flex-column h-20rem">
                                        
                                    <List 
                                            title="Challenges" 
                                            placeholder="Add new Challenges" 
                                            buttonLabel="Add to List" 
                                            tagLabel="solved" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="solved" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                                { id: 10, name: 'Rice', purchased: false },
                                                { id: 11, name: 'Tomatoes', purchased: false },
                                                { id: 12, name: 'Lettuce', purchased: false },
                                                { id: 13, name: 'Carrots', purchased: false },
                                                { id: 14, name: 'Potatoes', purchased: false },
                                                { id: 15, name: 'Onions', purchased: false },
                                                { id: 16, name: 'Garlic', purchased: false },
                                                { id: 17, name: 'Apples', purchased: false },
                                                { id: 18, name: 'Bananas', purchased: false },
                                                { id: 19, name: 'Oranges', purchased: false },
                                                { id: 20, name: 'Grapes', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />

                                    </div>
                                    <div className="flex pt-8 justify-content-between">
                                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()}  rounded />
                                        <Button label="Save" severity="success"   icon="pi pi-save"  iconPos="right" rounded   />
                                    </div>
                                </StepperPanel>
                                
                            </Stepper>

                            
                        </div>
                    </AccordionTab>

                    <AccordionTab header="Desarrollador II">
                        <div className="card flex justify-content-center">

                            <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}  headerPosition="bottom" >
                                <StepperPanel header="Results from Yesterday">
                                    <div className="flex flex-column h-20rem">
                                    <List 
                                            title="Tasks" 
                                            placeholder="Add new tasks" 
                                            buttonLabel="Add to List" 
                                            tagLabel="Finished" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="Finished" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                                { id: 10, name: 'Rice', purchased: false },
                                                { id: 11, name: 'Tomatoes', purchased: false },
                                                { id: 12, name: 'Lettuce', purchased: false },
                                                { id: 13, name: 'Carrots', purchased: false },
                                                { id: 14, name: 'Potatoes', purchased: false },
                                                { id: 15, name: 'Onions', purchased: false },
                                                { id: 16, name: 'Garlic', purchased: false },
                                                { id: 17, name: 'Apples', purchased: false },
                                                { id: 18, name: 'Bananas', purchased: false },
                                                { id: 19, name: 'Oranges', purchased: false },
                                                { id: 20, name: 'Grapes', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />
                                    </div>
                                    <div className="flex pt-8 justify-content-end">
                                        <Button label="Next" severity="secondary" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()}  rounded />
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Tasks to Execute Today">
                                    <div className="flex flex-column h-20rem">
                                        
                                    <List 
                                            title="Tasks" 
                                            placeholder="Add new tasks" 
                                            buttonLabel="Add to List" 
                                            tagLabel="Finished" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="Finished" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />

                                    </div>
                                    <div className="flex pt-8 justify-content-between">
                                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()}  rounded />
                                        <Button label="Next" severity="secondary" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()}  rounded />
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Challenges in the Process">
                                    <div className="flex flex-column h-20rem">
                                        
                                    <List 
                                            title="Challenges" 
                                            placeholder="Add new Challenges" 
                                            buttonLabel="Add to List" 
                                            tagLabel="solved" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="solved" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                                { id: 10, name: 'Rice', purchased: false },
                                                { id: 11, name: 'Tomatoes', purchased: false },
                                                { id: 12, name: 'Lettuce', purchased: false },
                                                { id: 13, name: 'Carrots', purchased: false },
                                                { id: 14, name: 'Potatoes', purchased: false },
                                                { id: 15, name: 'Onions', purchased: false },
                                                { id: 16, name: 'Garlic', purchased: false },
                                                { id: 17, name: 'Apples', purchased: false },
                                                { id: 18, name: 'Bananas', purchased: false },
                                                { id: 19, name: 'Oranges', purchased: false },
                                                { id: 20, name: 'Grapes', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />

                                    </div>
                                    <div className="flex pt-8 justify-content-between">
                                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()}  rounded />
                                        <Button label="Save" severity="success"   icon="pi pi-save"  iconPos="right" rounded   />
                                    </div>
                                </StepperPanel>
                                
                            </Stepper>

                            
                        </div>
                    </AccordionTab>

                    <AccordionTab header="Desarrollador III">
                        <div className="card flex justify-content-center">

                            <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}  headerPosition="bottom" >
                                <StepperPanel header="Results from Yesterday">
                                    <div className="flex flex-column h-20rem">
                                    <List 
                                            title="Tasks" 
                                            placeholder="Add new tasks" 
                                            buttonLabel="Add to List" 
                                            tagLabel="Finished" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="Finished" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                                { id: 10, name: 'Rice', purchased: false },
                                                { id: 11, name: 'Tomatoes', purchased: false },
                                                { id: 12, name: 'Lettuce', purchased: false },
                                                { id: 13, name: 'Carrots', purchased: false },
                                                { id: 14, name: 'Potatoes', purchased: false },
                                                { id: 15, name: 'Onions', purchased: false },
                                                { id: 16, name: 'Garlic', purchased: false },
                                                { id: 17, name: 'Apples', purchased: false },
                                                { id: 18, name: 'Bananas', purchased: false },
                                                { id: 19, name: 'Oranges', purchased: false },
                                                { id: 20, name: 'Grapes', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />
                                    </div>
                                    <div className="flex pt-8 justify-content-end">
                                        <Button label="Next" severity="secondary" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()}  rounded />
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Tasks to Execute Today">
                                    <div className="flex flex-column h-20rem">
                                        
                                    <List 
                                            title="Tasks" 
                                            placeholder="Add new tasks" 
                                            buttonLabel="Add to List" 
                                            tagLabel="Finished" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="Finished" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />

                                    </div>
                                    <div className="flex pt-8 justify-content-between">
                                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()}  rounded />
                                        <Button label="Next" severity="secondary" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()}  rounded />
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Challenges in the Process">
                                    <div className="flex flex-column h-20rem">
                                        
                                    <List 
                                            title="Challenges" 
                                            placeholder="Add new Challenges" 
                                            buttonLabel="Add to List" 
                                            tagLabel="solved" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="solved" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                                { id: 10, name: 'Rice', purchased: false },
                                                { id: 11, name: 'Tomatoes', purchased: false },
                                                { id: 12, name: 'Lettuce', purchased: false },
                                                { id: 13, name: 'Carrots', purchased: false },
                                                { id: 14, name: 'Potatoes', purchased: false },
                                                { id: 15, name: 'Onions', purchased: false },
                                                { id: 16, name: 'Garlic', purchased: false },
                                                { id: 17, name: 'Apples', purchased: false },
                                                { id: 18, name: 'Bananas', purchased: false },
                                                { id: 19, name: 'Oranges', purchased: false },
                                                { id: 20, name: 'Grapes', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />

                                    </div>
                                    <div className="flex pt-8 justify-content-between">
                                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()}  rounded />
                                        <Button label="Save" severity="success"   icon="pi pi-save"  iconPos="right" rounded   />
                                    </div>
                                </StepperPanel>
                                
                            </Stepper>

                            
                        </div>
                    </AccordionTab>

                    <AccordionTab header="Desarrollador IV">
                        <div className="card flex justify-content-center">

                            <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}  headerPosition="bottom" >
                                <StepperPanel header="Results from Yesterday">
                                    <div className="flex flex-column h-20rem">
                                    <List 
                                            title="Tasks" 
                                            placeholder="Add new tasks" 
                                            buttonLabel="Add to List" 
                                            tagLabel="Finished" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="Finished" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                                { id: 10, name: 'Rice', purchased: false },
                                                { id: 11, name: 'Tomatoes', purchased: false },
                                                { id: 12, name: 'Lettuce', purchased: false },
                                                { id: 13, name: 'Carrots', purchased: false },
                                                { id: 14, name: 'Potatoes', purchased: false },
                                                { id: 15, name: 'Onions', purchased: false },
                                                { id: 16, name: 'Garlic', purchased: false },
                                                { id: 17, name: 'Apples', purchased: false },
                                                { id: 18, name: 'Bananas', purchased: false },
                                                { id: 19, name: 'Oranges', purchased: false },
                                                { id: 20, name: 'Grapes', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />
                                    </div>
                                    <div className="flex pt-8 justify-content-end">
                                        <Button label="Next" severity="secondary" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()}  rounded />
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Tasks to Execute Today">
                                    <div className="flex flex-column h-20rem">
                                        
                                    <List 
                                            title="Tasks" 
                                            placeholder="Add new tasks" 
                                            buttonLabel="Add to List" 
                                            tagLabel="Finished" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="Finished" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />

                                    </div>
                                    <div className="flex pt-8 justify-content-between">
                                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()}  rounded />
                                        <Button label="Next" severity="secondary" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()}  rounded />
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Challenges in the Process">
                                    <div className="flex flex-column h-20rem">
                                        
                                    <List 
                                            title="Challenges" 
                                            placeholder="Add new Challenges" 
                                            buttonLabel="Add to List" 
                                            tagLabel="solved" 
                                            toggleButtonLabel="Active" // Cambiar texto del botón "Buy"
                                            undoButtonLabel="solved" 
                                            initialItems={[
                                                { id: 1, name: 'Milk', purchased: false },
                                                { id: 2, name: 'Eggs', purchased: false },
                                                { id: 3, name: 'Bread', purchased: false },
                                                { id: 4, name: 'Cheese', purchased: false },
                                                { id: 5, name: 'Butter', purchased: false },
                                                { id: 6, name: 'Yogurt', purchased: false },
                                                { id: 7, name: 'Chicken', purchased: false },
                                                { id: 8, name: 'Beef', purchased: false },
                                                { id: 9, name: 'Pasta', purchased: false },
                                                { id: 10, name: 'Rice', purchased: false },
                                                { id: 11, name: 'Tomatoes', purchased: false },
                                                { id: 12, name: 'Lettuce', purchased: false },
                                                { id: 13, name: 'Carrots', purchased: false },
                                                { id: 14, name: 'Potatoes', purchased: false },
                                                { id: 15, name: 'Onions', purchased: false },
                                                { id: 16, name: 'Garlic', purchased: false },
                                                { id: 17, name: 'Apples', purchased: false },
                                                { id: 18, name: 'Bananas', purchased: false },
                                                { id: 19, name: 'Oranges', purchased: false },
                                                { id: 20, name: 'Grapes', purchased: false },
                                            ]}
                                            onToggleItem={handleBuyItem} 
                                        />

                                    </div>
                                    <div className="flex pt-8 justify-content-between">
                                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()}  rounded />
                                        <Button label="Save" severity="success"   icon="pi pi-save"  iconPos="right" rounded   />
                                    </div>
                                </StepperPanel>
                                
                            </Stepper>

                            
                        </div>
                    </AccordionTab>

                </Accordion>
            </div>
            
        </Base>
        
    )
}
        