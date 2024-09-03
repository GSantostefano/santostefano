import Layout from '../../Components/Layout'

const Preguntas = () => {
    return (
        <Layout>
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
        
        {/* Pregunta 1 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">1. ¿Qué ingredientes utilizan en sus jabones?</h3>
          <p className="text-sm">Nuestros jabones están hechos con ingredientes naturales como aceites esenciales, manteca de karité, aceite de coco, y otros ingredientes orgánicos.</p>
        </div>
        
        {/* Pregunta 2 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">2. ¿Los productos son aptos para todo tipo de piel?</h3>
          <p className="text-sm">Sí, nuestros jabones y aromas están diseñados para ser suaves y aptos para todo tipo de piel, incluso para pieles sensibles.</p>
        </div>
  
        {/* Pregunta 3 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">3. ¿Ofrecen descuentos por compras al por mayor?</h3>
          <p className="text-sm">Sí, ofrecemos precios especiales y descuentos para pedidos al por mayor. Contáctanos para más detalles.</p>
        </div>
        
        {/* Pregunta 4 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">4. ¿Cómo puedo hacer un pedido personalizado?</h3>
          <p className="text-sm">Puedes solicitar pedidos personalizados a través de nuestro formulario de contacto o enviándonos un correo electrónico con los detalles.</p>
        </div>
        
        {/* Pregunta 5 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">5. ¿Hacen envíos internacionales?</h3>
          <p className="text-sm">Sí, realizamos envíos a nivel internacional. Los costos y tiempos de envío varían según el destino.</p>
        </div>
        
        {/* Pregunta 6 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">6. ¿Cuál es el tiempo de entrega estimado?</h3>
          <p className="text-sm">El tiempo de entrega varía entre 5 y 10 días hábiles para pedidos nacionales y entre 10 y 20 días hábiles para envíos internacionales.</p>
        </div>
  
        {/* Pregunta 7 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">7. ¿Qué métodos de pago aceptan?</h3>
          <p className="text-sm">Aceptamos tarjetas de crédito, PayPal, transferencias bancarias, y pagos contra entrega en algunas ubicaciones.</p>
        </div>
        
        {/* Pregunta 8 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">8. ¿Puedo devolver o cambiar un producto?</h3>
          <p className="text-sm">Sí, aceptamos devoluciones y cambios dentro de los 14 días posteriores a la entrega. El producto debe estar en su estado original.</p>
        </div>
        
        {/* Pregunta 9 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">9. ¿Cómo puedo contactar con atención al cliente?</h3>
          <p className="text-sm">Puedes contactarnos a través de nuestro formulario de contacto, por correo electrónico o llamando a nuestro número de atención al cliente.</p>
        </div>
        
        {/* Pregunta 10 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">10. ¿Sus productos son ecológicos y cruelty-free?</h3>
          <p className="text-sm">Sí, nuestros productos son respetuosos con el medio ambiente y no son testados en animales.</p>
        </div>
      </div>
      </Layout>
    );
  }
  
  export default Preguntas;
  