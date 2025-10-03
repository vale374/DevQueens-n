        // --- 1. Base de Conocimiento (Adaptada del código Python proporcionado) ---

        const base_conocimiento_data = {
            "metodos_de_pago": {
                "¿qué métodos de pago aceptan?": "Aceptamos pagos en efectivo, transferencias bancarias, Nequi, Daviplata, PSE y tarjeta de crédito/débito. ✅",
                "¿puedo pagar con tarjeta de crédito?": "Sí, recibimos pagos con tarjeta de crédito y débito Visa, Mastercard y otras principales franquicias. 💳",
                "¿aceptan transferencias bancarias?": "Claro que sí. Puedes hacer una transferencia a nuestra cuenta bancaria, te damos los datos al momento de la compra. 🏦",
                "¿puedo pagar en efectivo?": "Sí, puedes pagar en efectivo directamente en la tienda o al recibir tu pedido en Cartago. 💵",
                "¿tienen pago contraentrega?": "¡Así es! Contamos con pago contraentrega en Cartago sin costo adicional. 📦",
                "¿puedo pagar con nequi o daviplata?": "Sí, aceptamos Nequi y Daviplata como métodos rápidos y seguros de pago. 📲",
                "¿tienen pse?": "Disponemos de PSE para que hagas tu pago en línea desde tu banco con toda seguridad. 🌐",
                "¿puedo pagar a plazos?": "Por el momento no manejamos pagos a plazos, solo pago total al momento de la compra. ⏳",
                "¿cómo sé que mi pago fue confirmado?": "Tu pago queda confirmado en cuanto nos llegue la notificación de la plataforma o el comprobante de la transferencia. 📑",
                "¿cobran recargo por tarjeta?": "No cobramos recargos por usar tarjeta. El valor que pagas es el mismo que aparece en tu factura. ✔️"
            },
            "envios": {
                "¿hacen envíos en cartago?": "Realizamos envíos en todo el municipio de Cartago con entrega rápida y segura. 🚀",
                "¿cuánto vale el domicilio en cartago?": "El domicilio en Cartago tiene un costo desde $3.000 según la zona. 🏠",
                "¿entregan el mismo día?": "Hacemos entregas el mismo día si tu pedido lo realizas antes de las 4:00 p.m. ⏰",
                "¿puedo recoger mi pedido?": "Puedes recoger tu pedido directamente en la papelería si lo prefieres. 🛍️",
                "¿tienen contraentrega en cartago?": "Sí, contamos con pago contraentrega en Cartago. 📦",
                "¿hacen envíos a otras ciudades?": "Enviamos a otras ciudades de Colombia a través de transportadoras aliadas. 🚚",
                "¿cuánto tarda un envío nacional?": "El tiempo de entrega fuera de Cartago depende de la transportadora, generalmente entre 2 a 5 días hábiles. 📬",
                "¿puedo rastrear mi pedido?": "Puedes rastrear tu envío con el número de guía que te compartimos al despacharlo. 🔎",
                "¿cómo entregan en cartago?": "Si tu pedido es en Cartago, la entrega se hace directamente en la dirección que nos indiques. 🗺️",
                "¿qué pasa si hay un problema con el envío?": "Si surge algún inconveniente con el envío, nuestro equipo se comunica contigo para solucionarlo de inmediato. 📞"
            },
            "productos": {
                "¿qué productos venden?": "Contamos con un catálogo amplio: cuadernos, esferos, lápices, carpetas, colores, marcadores y más. 📝",
                "¿tienen productos escolares?": "Sí, tenemos productos escolares, de oficina y para manualidades. 🎨",
                "¿cómo sé si un producto está disponible?": "Puedes preguntarme si un producto está disponible y te confirmo de inmediato. ✔️",
                "¿qué marcas manejan?": "Manejamos marcas reconocidas como Norma, Bic, Faber-Castell, Pelikan, entre otras. ✨",
                "¿pueden conseguir productos bajo pedido?": "Si no encuentras un producto, puedes solicitarlo y tratamos de conseguirlo bajo pedido. 📋",
                "¿cómo son sus precios?": "Nuestros precios son competitivos y siempre tenemos promociones especiales. 💲",
                "¿dan factura?": "En cada compra te damos factura y garantía de calidad. 📑",
                "¿venden al por mayor?": "Sí, vendemos productos al por mayor y al detal según tu necesidad. 📦",
                "¿tienen combos escolares?": "Pregúntanos por los combos escolares y paquetes especiales que preparamos en temporada. 🎒",
                "¿actualizan el catálogo?": "Nuestro catálogo digital se actualiza constantemente para que siempre veas lo más reciente. 🌐",
                "Diferentes tipos de cuadernos":"Cuadernos argollados, cosidos."
            },
            "garantias_de_soporte": {
                "Compré un marcador permanente que llegó seco, ¿qué hago?": "¡Lamentamos el inconveniente! Tienes *3 días* para reportar defectos de fábrica. Te enviaremos un *reemplazo gratuito* en tu próximo pedido o con un domiciliario especial si es urgente.",
                "¿Cuál es el proceso para pedir una devolución de dinero?": "Si el producto está sellado, inicia el proceso contactando a soporte. La devolución se realiza a la misma cuenta de origen en un plazo de *3 a 5 días hábiles*.",
                "¿Cómo sé si mis datos personales y de pago están seguros en la web?": "Nuestra plataforma usa encriptación *SSL/TLS de 256 bits* y no almacenamos información sensible de tarjetas. Tu seguridad es nuestra prioridad.",
                "La página me da un error al finalizar la compra, ¿a quién contacto?": "Si tienes problemas técnicos, por favor envía una captura de pantalla al WhatsApp de *Soporte Técnico* (300 543 2109) para ayudarte a completar el pedido manualmente.",
                "¿Los precios del sitio web ya incluyen el IVA?": "Sí, todos los precios mostrados en nuestra papelería virtual *incluyen el IVA* (Impuesto al Valor Agregado) correspondiente a cada producto."
            },
            "promociones_de_ventas": {
                "¿Tienen algún descuento especial para estudiantes o profesores?": "Sí, tenemos un *descuento fijo del 5%* en útiles escolares presentando un carné estudiantil o certificación docente vigente al momento de pagar.",
                "¿Hay promociones por la compra de útiles de la marca Faber-Castell?": "¡Claro! Generalmente ofrecemos un *3x2 en lápices y colores Faber-Castell* al inicio de cada mes. Revisa la sección 'Ofertas del Mes'.",
                "¿Qué debo hacer si quiero comprar al por mayor para una tienda pequeña?": "Debes contactar a nuestra línea de *Ventas Corporativas* (300 987 6543) para acceder a precios de mayorista con descuentos superiores al 20%.",
                "¿Tienen alguna opción de crédito o 'paga después' para empresas?": "Sí, ofrecemos un plan de crédito a 15 días a clientes corporativos con un mínimo de 3 pedidos previos y previa aprobación de nuestra área financiera.",
                "Si compro un combo de colores, ¿puedo cambiar un artículo por otro similar?": "Lamentablemente, los *combos* tienen precios fijos y no son modificables. Debes comprar los artículos por separado si deseas personalizarlos."
            }
        };

        const respuestas_saludo = [
            "¡Hola! 😊 Soy Asistente DevQueens. ¿Buscas un producto específico , información sobre envíos en Cartago o sobre nuestros métodos de pago y garantias de soporte?",
            "¡Bienvenido/a a Papelería DevQueens! 😊 ¿Te ayudo con métodos de pago, envíos o productos?",
            "¡Buenos días/tardes! 🌟 Pregúntame sobre promociones, catálogo o entregas.",
            "¡Hola desde Cartago! 🚀 Estoy lista para ayudarte con tu compra en DevQueens."
        ];

        const respuestas_despedida = [
            "¡Hasta pronto! 👋 Gracias por comprar en DevQueens.",
            "¡Nos vemos! 😊 Que tengas un excelente día.",
            "¡Adiós! 🌟 DevQueens siempre a tu servicio."
        ];

        // --- 2. Funciones de Utilidad (Adaptadas de la lógica Python) ---

        /**
         * Limpia y normaliza el texto de entrada.
         */
        function limpiarTexto(texto) {
            texto = texto.toLowerCase();
            texto = texto.replace(/[^\w\s¿?áéíóúñ]/g, ' ');
            return texto.trim().split(/\s+/).join(' ');
        }

        /**
         * Calcula la puntuación de coincidencia por solapamiento de palabras.
         */
        function calcularSimilitud(preguntaUsuario, preguntaBase) {
            const palabrasUsuario = new Set(limpiarTexto(preguntaUsuario).split(' '));
            const palabrasBase = new Set(limpiarTexto(preguntaBase).split(' '));
            
            if (palabrasUsuario.size === 0 || palabrasBase.size === 0) return 0;

            let interseccion = 0;
            palabrasUsuario.forEach(word => {
                if (palabrasBase.has(word) && word.length > 2) { // Ignorar palabras cortas para mejor precisión
                    interseccion++;
                }
            });

            // Coeficiente de Jaccard simplificado
            return interseccion / Math.min(palabrasUsuario.size, palabrasBase.size); 
        }

        /**
         * Detecta si el texto es un saludo.
         */
        function detectarSaludo(pregunta) {
            const saludos = ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'saludos', 'qué tal', 'hey'];
            return saludos.some(saludo => limpiarTexto(pregunta).includes(saludo));
        }

        /**
         * Detecta si el texto es una despedida.
         */
        function detectarDespedida(pregunta) {
            const despedidas = ['adiós', 'hasta luego', 'nos vemos', 'chau', 'bye', 'salir', 'terminar'];
            return despedidas.some(despedida => limpiarTexto(pregunta).includes(despedida));
        }

        /**
         * Retorna un elemento aleatorio de un array.
         */
        function randomChoice(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        // --- 3. Lógica del Chatbot ---

        /**
         * Encuentra la mejor respuesta en la base de conocimiento.
         */
        function encontrarMejorRespuesta(preguntaUsuario) {
            const preguntaLimpia = limpiarTexto(preguntaUsuario);

            if (detectarSaludo(preguntaLimpia)) {
                return randomChoice(respuestas_saludo);
            }
            if (detectarDespedida(preguntaLimpia)) {
                return randomChoice(respuestas_despedida);
            }

            let mejorRespuesta = "";
            let mejorPuntuacion = 0;
            let materiaEncontrada = "";

            for (const materia in base_conocimiento_data) {
                for (const preguntaBase in base_conocimiento_data[materia]) {
                    const respuesta = base_conocimiento_data[materia][preguntaBase];
                    const puntuacion = calcularSimilitud(preguntaLimpia, preguntaBase);

                    if (puntuacion > mejorPuntuacion) {
                        mejorPuntuacion = puntuacion;
                        mejorRespuesta = respuesta;
                        materiaEncontrada = materia;
                    }
                }
            }

            // Umbral de coincidencia (0.3 es un buen punto de partida para este algoritmo simple)
            if (mejorPuntuacion >= 0.3) { 
                const materiaTitle = materiaEncontrada.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                return `📚 [${materiaTitle}] ${mejorRespuesta}`;
            } else {
                return randomChoice([
                    "🤔 No estoy seguro de entender eso. ¿Puedes reformular la pregunta o preguntar sobre **métodos de pago**, **envíos**, **productos**, **promociones** o **garantías**?",
                    "🔍 Lo siento, no tengo esa información. Intenta ser más específico.",
                    "❓ Hmm, esa pregunta está fuera de mi alcance. ¿En qué más puedo ayudarte con tu compra en DevQueens?"
                ]);
            }
        }

        // --- 4. Funciones de Interfaz (UI) ---

        const chatWindow = document.getElementById('chatbot-window');
        const chatMessages = document.getElementById('chat-messages');
        const userInput = document.getElementById('user-input');
        const iconOpen = document.getElementById('icon-open');
        const iconClose = document.getElementById('icon-close');

        /**
         * Abre o cierra la ventana del chat y alterna el icono del clip/cierre.
         */
        function toggleChat() {
            const isHidden = chatWindow.classList.toggle('hidden');
            
            // Alternar los iconos del botón flotante
            iconOpen.classList.toggle('hidden', !isHidden);
            iconClose.classList.toggle('hidden', isHidden);

            if (!isHidden) {
                // Si se abre, enfocar el input y desplazar al final
                userInput.focus();
                scrollToBottom();
            }
        }

        /**
         * Desplazamiento automático al final de los mensajes.
         */
        function scrollToBottom() {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        /**
         * Muestra un mensaje en la interfaz.
         */
        function displayMessage(text, sender) {
            const messageWrapper = document.createElement('div');
            messageWrapper.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;

            const messageBubble = document.createElement('div');
            // Usamos innerHTML para permitir que el bot use negritas (*) y emojis.
            messageBubble.innerHTML = text.replace(/\*(.*?)\*/g, '<b>$1</b>'); 

            // Estilos de burbuja
            if (sender === 'user') {
                messageBubble.className = 'bg-dev-pink text-white p-3 rounded-tl-xl rounded-b-xl max-w-xs shadow-md';
            } else {
                messageBubble.className = 'bg-gray-200 text-gray-800 p-3 rounded-tr-xl rounded-b-xl max-w-xs shadow-md';
            }

            messageWrapper.appendChild(messageBubble);
            chatMessages.appendChild(messageWrapper);
            scrollToBottom();
        }

        /**
         * Procesa el mensaje del usuario y obtiene la respuesta del bot.
         */
        function sendMessage() {
            const text = userInput.value.trim();
            if (text === '') return;

            // 1. Mostrar mensaje del usuario
            displayMessage(text, 'user');
            userInput.value = '';

            // 2. Obtener respuesta del bot (simulación de tiempo de respuesta)
            setTimeout(() => {
                const response = encontrarMejorRespuesta(text);
                displayMessage(response, 'bot');
            }, 500); // Pequeño delay para simular que está "pensando"
        }

        // --- 5. Inicialización: Agrega el mensaje de bienvenida al cargar la página ---

        window.onload = () => {
             // Limpiamos el contenedor (en caso de que hubiera un mensaje estático)
             chatMessages.innerHTML = ''; 
             displayMessage(randomChoice(respuestas_saludo), 'bot');
        }