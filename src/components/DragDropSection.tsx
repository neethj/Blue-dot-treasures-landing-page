// src/components/DragDropSection.tsx
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

interface FoodItem {
  id: string;
  name: string;
}

const initialFoods: FoodItem[] = [
  { id: 'food-1', name: 'Moringa Leaf' },
  { id: 'food-2', name: 'Moringa Seed' },
  { id: 'food-3', name: 'Moringa Root' },
  { id: 'food-4', name: 'Moringa Pod' }
];

export default function DragDropSection() {
  const [foods, setFoods] = useState<FoodItem[]>(initialFoods);
  const [enhancedFoods, setEnhancedFoods] = useState<FoodItem[]>([]);

  const reorderList = (list: FoodItem[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const items = reorderList(
        source.droppableId === 'foods' ? foods : enhancedFoods,
        source.index,
        destination.index
      );

      if (source.droppableId === 'foods') {
        setFoods(items);
      } else {
        setEnhancedFoods(items);
      }
    } else {
      const sourceList = source.droppableId === 'foods' ? foods : enhancedFoods;
      const destList = destination.droppableId === 'foods' ? foods : enhancedFoods;
      const item = sourceList[source.index];

      if (!enhancedFoods.some(food => food.id === item.id)) {
        const newSourceList = [...sourceList];
        const newDestList = [...destList];
        
        newSourceList.splice(source.index, 1);
        newDestList.splice(destination.index, 0, item);

        if (source.droppableId === 'foods') {
          setFoods(newSourceList);
          setEnhancedFoods(newDestList);
        } else {
          setEnhancedFoods(newSourceList);
          setFoods(newDestList);
        }
      }
    }
  };

  return (
    <section className="py-20 bg-white" id="drag-drop">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Enhanced Foods</h2>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="flex flex-col md:flex-row gap-8">
            <Droppable droppableId="foods">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex-1 p-4 bg-gray-50 rounded-lg min-h-[300px]"
                >
                  <h3 className="text-xl font-semibold mb-4">Available Foods</h3>
                  {foods.map((food, index) => (
                    <Draggable key={food.id} draggableId={food.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-4 mb-2 bg-white rounded shadow"
                        >
                          {food.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId="enhanced">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex-1 p-4 bg-emerald-50 rounded-lg min-h-[300px]"
                >
                  <h3 className="text-xl font-semibold mb-4">Enhanced Foods</h3>
                  {enhancedFoods.map((food, index) => (
                    <Draggable key={food.id} draggableId={food.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-4 mb-2 bg-white rounded shadow"
                        >
                          {food.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </section>
  );
}